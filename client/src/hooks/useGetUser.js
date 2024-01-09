import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useGetUser = () => {
    const [user] = useAuthState(auth);
    const [getUser, setGetUser] = useState([]);

    useEffect(() => {
        if (user) {
            const email = user?.email;
            const url = `${process.env.REACT_APP_API}/user/${email}`;
            fetch(url)
            .then(res => res.json())
            .then(data => setGetUser(data))
        }
    }, []);
    return [getUser, setGetUser]
};

export default useGetUser;