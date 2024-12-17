import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyDynamicallyCenteredModal() {
  const [modalShow, setModalShow] = useState(false);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    try {
      const res = await fetch("https://api.github.com/users/github-john-doe");
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await res.json();
      setUsers([json]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        En savoir plus
      </Button>

      <Modal show={modalShow} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Mon profil GitHub</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {loading ? (
            <p>Chargement...</p>
          ) : error ? (
            <p>Erreur: {error}</p>
          ) : (
            users && users.map(user => (
              <div key={user.id}>
                <img src={user.avatar_url} alt={user.login} style={{width: '100px'}} />
                <h2>{user.login}</h2>
                <p>{user.bio}</p>
              </div>
            ))
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyDynamicallyCenteredModal;
