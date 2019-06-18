import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout'
import FormField from '../../ui/formField'
import { validate } from '../../ui/misc'

class AddEditMatch extends Component {

    state= {
        matchId: '',
        formType: '',
        formError: false,
        formSuccess: '',
        teams: [],
        formdata:{
            
        }
    }

    render() {
        return (
            <div>
                <AdminLayout>
                    add edit match
                </AdminLayout>
            </div>
        );
    }
}

export default AddEditMatch;