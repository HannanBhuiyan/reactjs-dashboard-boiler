import React from "react";
import MasterLayout from "../components/masterLayout/MasterLayout";
import { useParams } from "react-router-dom";

const NotificationPage = () => {

    const params = useParams() 

    return(
        <>
            <MasterLayout>
                <h1>This is notification page</h1>
                <strong>{params.notificationName}</strong>
            </MasterLayout>
        </>
    )
}

export default NotificationPage