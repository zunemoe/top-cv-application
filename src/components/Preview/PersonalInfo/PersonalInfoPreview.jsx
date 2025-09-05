import Icon from '@mdi/react';
import { mdiEmail, mdiCellphone, mdiMapMarker, mdiLinkedin } from '@mdi/js';

function PersonalInfoPreview({ personalInfo }) {
    const {
        fullName = 'Your Name',
        email = '',
        mobile = '',
        address = '',
        linkedIn = ''
    } = personalInfo || {};

    return (
        <div className="preview-header">
            <h2>{fullName}</h2>
            <div className="personal-info">
                {email && (
                    <p><Icon path={mdiEmail} size={1} /> {email}</p>
                )}
                {mobile && (
                    <p><Icon path={mdiCellphone} size={1} /> {mobile}</p>
                )}
                {address && (
                    <p><Icon path={mdiMapMarker} size={1} /> {address}</p>
                )}
                {linkedIn && (
                    <p><Icon path={mdiLinkedin} size={1} /> {linkedIn}</p>
                )}
            </div>
        </div>
    );
};

export default PersonalInfoPreview;