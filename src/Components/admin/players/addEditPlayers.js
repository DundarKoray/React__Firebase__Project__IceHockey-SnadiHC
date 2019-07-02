import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout'

import FormField from '../../ui/formField'
import { validate } from '../../ui/misc'

import Fileuploader from '../../ui/fileUploader'
import { firebasePlayers, firebaseDB, firebase } from '../../../firebase'

class AddEditPlayers extends Component {

    state= {
        playerId: '',
        formType: '',
        formError: false,
        formSuccess: '',
        defaultImg: '',
        formdata:{
            name:{
                element: 'input',
                value: '',
                config:{
                    label: 'Player First Name',
                    name: 'name_input',
                    type: 'text',
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: true
            },
            lastname:{
                element: 'input',
                value: '',
                config:{
                    label: 'Player Last Name',
                    name: 'lastname_input',
                    type: 'text',
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: true
            },
            number:{
                element: 'input',
                value: '',
                config:{
                    label: 'Player Number',
                    name: 'number_input',
                    type: 'text',
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel: true
            },
            position:{
                element: 'select',
                value: '',
                config:{
                    label: 'Select a Position',
                    name: 'select_position',
                    type: 'select',
                    options: [
                        {key: "Keeper",value:"Keeper"},
                        {key: "Defence",value:"Defence"},
                        {key: "Midfield",value:"Midfield"},
                        {key: "Striker",value:"Striker"}
                    ]
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
            image:{
                element: 'image',
                value: '',
                validation:{
                    required: true
                },
                valid: false
            }
        }
        
    }

    updateFields = (player, playerId, formType, defaultImg) => {
        const newFormdata = {...this.state.formdata}
        
        for(let key in newFormdata){
            newFormdata[key].value = player[key]
            newFormdata[key].valid = true
        }

        this.setState({
            playerId,
            defaultImg,
            formType,
            formdata: newFormdata
        })
    }

    componentDidMount(){
        const playerId = this.props.match.params.id

        if(!playerId){
            /// add player
            this.setState({
                formType: 'Add Player'
            })

        }else {
            /// edit player
            firebaseDB.ref(`players/${playerId}`).once('value')
            .then(snapshot => {
                const playerData = snapshot.val()

                firebase.storage().ref('player')
                .child(playerData.image).getDownloadURL()
                .then( url => {
                    this.updateFields(playerData, playerId, 'Edit player', url)
                }).catch( e => {
                    this.updateFields({
                        ...playerData,
                        image:''
                    }, playerId, 'Edit player', '')
                })
            })

        }
    }

    updateForm(element, content = ''){
        // console.log(element)
        const newFormdata = {...this.state.formdata}
        const newElement = { ...newFormdata[element.id]}

        if(content === ''){
            newElement.value = element.event.target.value
        } else {
            newElement.value = content
        }

        let validData = validate(newElement)
        // console.log(validData)
        newElement.valid = validData[0]
        newElement.validationMessage = validData[1]

        newFormdata[element.id] = newElement
        // console.log(newFormdata)

        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    successForm = (message) => {
        this.setState({
            formSuccess: message
        })
        setTimeout(()=>{
            this.setState({
                formSuccess:''
            })
        },2000)
    }

    submitForm(event){
        event.preventDefault()

        let dataToSubmit = {}
        let formIsValid = true

        for(let key in this.state.formdata){
            dataToSubmit[key] = this.state.formdata[key].value
            formIsValid = this.state.formdata[key].valid && formIsValid
        }

        if(formIsValid){
            // console.log(dataToSubmit)
            if(this.state.formType === 'Edit player'){
                firebaseDB.ref(`players/${this.state.playerId}`)
                .update(dataToSubmit).then( ()=>{
                    this.successForm('Update correctly')
                }).catch(e => {
                    this.setState({formError: true})
                })
            } else {
                firebasePlayers.push(dataToSubmit).then(() =>{
                    this.props.history.push('/admin_players')
                }).catch(e=>{
                    this.setState({
                        formError: true
                    })
                })
            }
        }else {
            // console.log('error')
            this.setState({
                formError: true
            })
        }
        
    }

    resetImage = () => {
        const newFormdata = {...this.state.formdata}
        newFormdata['image'].value = ''
        newFormdata['image'].valid = false 
        this.setState({
            defaultImg: '',
            formdata: newFormdata
        })
    }

    storeFilename = (filename) => {
        this.updateForm({id:'image'}, filename)
    }

    render() {
        return (
                <AdminLayout>
                    <div className="editplayers_dialog_wrapper">
                        <h2>{this.state.formType}</h2>
                        <div>
                            <form onSubmit={(event)=> this.submitForm(event)}>

                                <Fileuploader
                                    dir="player"
                                    tag={"Player Image"}
                                    defaultImg={this.state.defaultImg}
                                    defaultImgName={this.state.formdata.image.value}
                                    resetImage={()=> this.resetImage()}
                                    filename={(filename)=> this.storeFilename(filename)}
                                />

                                <FormField 
                                    id={'name'} 
                                    formdata={this.state.formdata.name} 
                                    change={(element)=> this.updateForm(element)}
                                />
                                <FormField 
                                    id={'lastname'} 
                                    formdata={this.state.formdata.lastname} 
                                    change={(element)=> this.updateForm(element)}
                                />
                                <FormField 
                                    id={'number'} 
                                    formdata={this.state.formdata.number} 
                                    change={(element)=> this.updateForm(element)}
                                />
                                <FormField 
                                    id={'position'} 
                                    formdata={this.state.formdata.position} 
                                    change={(element)=> this.updateForm(element)}
                                />
                                <div className="success_label">{this.state.formSuccess}</div>
                                {this.state.formError ? 
                                    <div className="error_label">
                                        Something is wrong
                                    </div>
                                    : ''
                                }
                                <div className="admin_submit">
                                    <button onClick={(event)=> this.submitForm(event)}>
                                        {this.state.formType}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </AdminLayout>
        )
    }
}

export default AddEditPlayers