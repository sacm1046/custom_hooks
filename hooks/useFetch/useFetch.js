import { useState, useEffect, useRef } from 'react'


export const useFetch = (url) => {

    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({
            loading: true,
            error: null,
            data: null
        })

        fetch(url)
            .then(res => res.json())
            .then(data => {

                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }else{
                    console.log('setSate was not called')
                }
                            
               /*  setTimeout(() => {
                    if (isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        })
                    }else{
                        console.log('setSate was not called')
                    }
                }, 4000) */



            })
            .catch(err =>{
                setState({
                    loading: false,
                    error: 'unexpected error',
                    data: null
                })
            })
    }, [url])

    return state;
}


