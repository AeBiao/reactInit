import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './widthStore';

interface TypePorps {
    card: any;
    dialog: any;
    showDialog: Function;
}

function Login(props: TypePorps) {
    const { card, dialog, showDialog } = props;
    const { name } = card;
    const { status } = dialog;
    return (
        <div className="login" onClick={() => showDialog()} aria-hidden="true">
            login{name}
            {status ? 'true' : 'false'}
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
