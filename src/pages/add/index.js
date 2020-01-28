import React from 'react';
import { Grid, Container } from '@material-ui/core';
import './style.scss';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { submitArticle } from '../../store/actions';

export function Add() {
    const dispatch = useDispatch();
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
            console.log(values);
            dispatch(submitArticle(values));
        }
    });
    return (
        <Container maxWidth="md" className="container">
            <Grid container justify="center" className="grid-container">
                <Grid item md={6}>
                    <form className="form" onSubmit={formik.handleSubmit}>
                        <div className="form-control">
                            <label>Nome</label>
                            <input type="text" name="name" placeholder="Insira o seu Nome" required value={formik.values.name} onChange={formik.handleChange} />
                        </div>
                        
                        <div className="form-control">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Insira o seu E-mail" value={formik.values.email} onChange={formik.handleChange} />
                        </div>
                        
                        <div className="form-control">
                            <label>Título</label>
                            <input type="text" name="title" placeholder="Insira o seu Título" value={formik.values.title} onChange={formik.handleChange} />
                        </div>

                        <div className="form-control">
                            <label>Assunto</label>
                            <input type="text" name="subject" placeholder="Insira o seu Assunto" value={formik.values.subject} onChange={formik.handleChange} />
                        </div>
                        
                        <div className="form-control">
                            <label>Telefone</label>
                            <input type="tel" name="phone" placeholder="Insira o seu Telefone" value={formik.values.phone} onChange={formik.handleChange} />
                        </div>
                        
                        <div className="form-control">
                            <label>Mensagem</label>
                            <textarea name="text" placeholder="Insira o seu Texto" value={formik.values.text}></textarea>
                        </div>

                        <button type="submit">Adicionar</button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}