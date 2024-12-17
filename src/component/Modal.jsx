import React, { useState, useEffect } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaUsers, FaBox, FaMapMarkerAlt, FaEye } from "react-icons/fa";

function MyDynamicallyCenteredModal() {
  const [modalShow, setModalShow] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUser = async () => {
    try {
      const res = await fetch("https://api.github.com/users/github-john-doe");
      if (!res.ok) throw new Error("Network response was not ok");
      const json = await res.json();
      setUser(json);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  return (
    <>
      {/* Bouton pour ouvrir la modale */}
      <Button variant="danger" onClick={handleShow}>
        En savoir plus
      </Button>

      {/* Contenu de la modale */}
      <Modal show={modalShow} onHide={handleClose} centered size="lg md sm ">
        <Modal.Header className="bg-dark text-white" closeButton>
          <Modal.Title>Mon profil GitHub</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          {loading ? (
            <p>Chargement...</p>
          ) : error ? (
            <p>Erreur: {error}</p>
          ) : user ? (
            <Row>
              {/* Colonne gauche avec l'image */}
              <Col lg={6} md={5} sm={12} className="text-center">
                <img 
                  className="img-fluid mx-auto d-block"
                  src={user.avatar_url}
                  alt={user.login}
                />
              </Col>
              {/* Colonne droite avec les informations */}
              <Col lg={6} md={7} sm={12}>
                  <h4>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#0366d6" }}
                  >
                    <FaGithub /> {user.name || user.login}
                  </a>
                  </h4>
                  <hr />
                  <p>
                    <FaMapMarkerAlt /> {user.location || "Localisation inconnue"}
                  </p>
                  <hr />
                  <p>{user.bio || "Aucune bio disponible"}</p>
                  <hr />
                  <p>
                    <FaBox /> Repositories : {user.public_repos}
                  </p>
                  <hr />
                  <p>
                    <FaUsers /> Followers : {user.followers}
                  </p>
                  <hr />
                  <p>
                    <FaEye /> Following : {user.following}
                  </p>
              </Col>
            </Row>
          ) : null}
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyDynamicallyCenteredModal;
