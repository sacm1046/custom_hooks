# useForm Hook

How to use?
```
    const initialForm = {
        name: 'String',
        age: Number,
        email: 'String'
    }
    const [ formValues, handleInputChange, reset ] = useForm(initialForm);
```