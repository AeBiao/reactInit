function mapStateToProps(state: any) {
    return state;
}

function mapDispatchToProps(dispatch: any) {
    return {
        changeName() {
            dispatch({
                type: 'CHANGE_NAME',
                name: '葬爱'
            });
        },
        showDialog() {
            dispatch({
                type: 'SHOW_DIALOG'
            });
        }
    };
}

export { mapStateToProps, mapDispatchToProps };