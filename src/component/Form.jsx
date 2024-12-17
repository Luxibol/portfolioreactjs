import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactForm() {
  return (
    <Form>
      <Form.Group controlId="formName">
        <Form.Control 
        type="text" 
        placeholder="Votre nom" 
        required />
      </Form.Group>

      <Form.Group controlId="formEmail" className="py-2">
        <Form.Control 
        type="email" 
        placeholder="Votre email" 
        required />
      </Form.Group>

      <Form.Group controlId="formTelephone">
        <Form.Control 
        type="tel" 
        placeholder="Votre numéro de téléphone" 
        required />
      </Form.Group>

      <Form.Group controlId="formSubject" className="py-2">
        <Form.Control 
        type="text" 
        placeholder="Sujet" 
        required />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Control 
        as="textarea" rows={3} 
        placeholder="Votre message" 
        style={{ height: '300px' }}
        required />
      </Form.Group>

      <div className="text-center py-3">
        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </div>

    </Form>
  );
}

export default ContactForm;