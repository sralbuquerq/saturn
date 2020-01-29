import React from 'react';
import { Grid, Container, Select, MenuItem } from '@material-ui/core';
import './style.scss';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { submitArticle } from '../../store/actions';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const Add = () => {
    let timer;
    const history = useHistory();
    const dispatch = useDispatch();

    function validateNumber(event) {
        const elm = event.target;
        const value = elm.value;
        elm.value = value.replace(/[^0-9\.]+/g, '');
    }

    function validateString(event) {
        const elm = event.target;
        const value = elm.value;
        elm.value = value.replace(/[0-9\.]+/g, '');
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            title: '',
            subject: '',
            phone: '',
            text: ''
        },
        onSubmit: values => {
            const date = new Date();
            axios.post(`http://localhost:4000/add`, {
                values
            })
            .then(response => {
                timer = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();

                // Como está mockado, ignoramos o processo a seguir:
                // dispatch(submitArticle(response));
                
                // E o substituimos por este, para termos a mesma sensação:
                dispatch(submitArticle({...values, timer}));
                history.push('/');
            })
            .catch(error => {
                console.log(error);
            })
        }
    });
    return (
        <Container maxWidth="md" className="container">
            <Grid container justify="center" className="grid-container">
                <Grid item md={6}>
                    <form className="form" onSubmit={formik.handleSubmit}>
                        <div className="form-control">
                            <label>Nome</label>
                            <input type="text" name="name" placeholder="Insira o seu Nome" required value={formik.values.name} onChange={formik.handleChange} onKeyUp={validateString} />
                        </div>
                        
                        <div className="form-control">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Insira o seu E-mail" value={formik.values.email} onChange={formik.handleChange} />
                        </div>
                        
                        <div className="form-control">
                            <label>Título</label>
                            <input type="text" name="title" placeholder="Insira o seu Título" value={formik.values.title} onChange={formik.handleChange} onKeyUp={validateString} />
                        </div>

                        <div className="form-control">
                            <label>Assunto</label>
                            <Select
                                name="subject"
                                value={formik.values.subject}
                                onChange={formik.handleChange}
                            >
                                <MenuItem value="esports">Esporte Eletrônico</MenuItem>
                                <MenuItem value="soccer">Futebol</MenuItem>
                                <MenuItem value="football">Futebol Americano</MenuItem>
                            </Select>
                            {/* <input type="text" name="subject" placeholder="Insira o seu Assunto" value={formik.values.subject} onChange={formik.handleChange} /> */}
                        </div>
                        
                        <div className="form-control">
                            <label>Telefone</label>
                            <input type="tel" name="phone" placeholder="Insira o seu Telefone" value={formik.values.phone} onChange={formik.handleChange} onKeyUp={validateNumber} />
                        </div>
                        
                        <div className="form-control">
                            <label>Mensagem</label>
                            <textarea name="text" placeholder="Insira o seu Texto" value={formik.values.text} onChange={formik.handleChange}></textarea>
                        </div>

                        <button type="submit">Adicionar</button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}