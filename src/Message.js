import React, { forwardRef } from 'react'
import { Typography, Card, CardContent } from "@material-ui/core"

import "./Message.css"
const Message = forwardRef(({ username, message }, ref) => {
    const isTrue = username === message.username

    return (
        <div ref={ref} className={`message ${isTrue && 'message_user'}`}>
            <Card className={isTrue ? "message_userCard" : "message_guestCard"}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2">
                        {!isTrue && `${message.username || 'Unknown User'}: `} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
