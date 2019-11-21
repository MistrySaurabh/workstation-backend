module.exports = (req, res) => {

    let filter = {
        notifiable_id: req.user._id
    }
    let update = {
        read_at: new Date()
    }

    Notifications.update(filter, update, { multi: true }).then((result) => {
        if (result.nModified > 0) {
            return res.status(200).json({ status: 'success', message: 'Notifications successfully updated' })
        } else {
            return res.status(200).json({ status: 'error', errors: 'Failed to updated notifications' })
        }
    }).catch(e => {
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
            errors: e
        });
    })

}