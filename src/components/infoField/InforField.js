import React, {Component} from 'react';
import './InforField.css'

export class InfoField extends Component {
    render() {
        const icon = _getIconPath(this.props.type)

        return (
            <div className="col-6">
                <div className="col-2 info-field-icon-container">
                    <img src={icon}/>
                </div>
                <div className="col-9 info-field-icon-value">{this.props.value}</div>
            </div>
        )
    }
}

const _getIconPath = (type) => {
    if (type === 'dob') return `${process.env.PUBLIC_URL}/images/icon-dob.svg`
    if (type === 'email') return `${process.env.PUBLIC_URL}/images/icon-email.svg`
    if (type === 'idCard') return `${process.env.PUBLIC_URL}/images/icon-idCard.svg`
    if (type === 'phone') return `${process.env.PUBLIC_URL}/images/icon-phone.svg`
    if (type === 'place') return `${process.env.PUBLIC_URL}/images/icon-place.svg`
    if (type === 'facebook') return `${process.env.PUBLIC_URL}/images/icon-facebook.svg`
    if (type === 'github') return `${process.env.PUBLIC_URL}/images/icon-github.svg`
}
