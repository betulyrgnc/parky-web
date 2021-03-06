// Packages
import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

//Components
import DeleteRezervButton from '../../components/DeleteRezervButton/index';

// Local Modules
import './index.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement("#root");
export default class PastRezervations extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }


  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return(
      <div className="pastRezervation">
        <Link to="#" className="save-rezervation" onClick={this.openModal}>Geçmiş Rezervasyonlarım</Link>
        <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        >
          <h3 className="past-title" ref={subtitle => this.subtitle = subtitle}>Geçmiş Rezervasyonlarım</h3>
          <button className="past-close" onClick={this.closeModal}>X</button>
          <form>
            <div className="row">
              <div className="col-md-4">
                <div className="past-info">
                  <div className="past-box">
                    <h6>Crash Otopark</h6>
                    <ul>
                      <li><p>Başlangıç: <span>21.04.2018</span></p></li>
                      <li><p>Bitiş: <span>21.04.2018</span></p></li>
                      <li><p>Plaka: <span>61 AA 61</span></p></li>
                    </ul>
                    <DeleteRezervButton></DeleteRezervButton>
                  </div>
                 </div>
              </div>
              <div className="col-md-4">
                <div className="past-info">
                  <div className="past-box">
                    <h6>Crash Otopark</h6>
                    <ul>
                      <li><p>Başlangıç: <span>21.04.2018</span></p></li>
                      <li><p>Bitiş: <span>21.04.2018</span></p></li>
                      <li><p>Plaka: <span>61 AA 61</span></p></li>
                    </ul>
                    <DeleteRezervButton></DeleteRezervButton>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="past-info">
                  <div className="past-box">
                    <h6>Crash Otopark</h6>
                    <ul>
                      <li><p>Başlangıç: <span>21.04.2018</span></p></li>
                      <li><p>Bitiş: <span>21.04.2018</span></p></li>
                      <li><p>Plaka: <span>61 AA 61</span></p></li>
                    </ul>
                    <DeleteRezervButton></DeleteRezervButton>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="past-info">
                  <div className="past-box">
                    <h6>Crash Otopark</h6>
                    <ul>
                      <li><p>Başlangıç: <span>21.04.2018</span></p></li>
                      <li><p>Bitiş: <span>21.04.2018</span></p></li>
                      <li><p>Plaka: <span>61 AA 61</span></p></li>
                    </ul>
                    <DeleteRezervButton></DeleteRezervButton>
                  </div>
                 </div>
              </div>
              <div className="col-md-4">
                <div className="past-info">
                  <div className="past-box">
                    <h6>Crash Otopark</h6>
                    <ul>
                      <li><p>Başlangıç: <span>21.04.2018</span></p></li>
                      <li><p>Bitiş: <span>21.04.2018</span></p></li>
                      <li><p>Plaka: <span>61 AA 61</span></p></li>
                    </ul>
                    <DeleteRezervButton></DeleteRezervButton>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="past-info">
                  <div className="past-box">
                    <h6>Crash Otopark</h6>
                    <ul>
                      <li><p>Başlangıç: <span>21.04.2018</span></p></li>
                      <li><p>Bitiş: <span>21.04.2018</span></p></li>
                      <li><p>Plaka: <span>61 AA 61</span></p></li>
                    </ul>
                    <DeleteRezervButton></DeleteRezervButton>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="past-info">
                  <div className="past-box">
                    <h6>Crash Otopark</h6>
                    <ul>
                      <li><p>Başlangıç: <span>21.04.2018</span></p></li>
                      <li><p>Bitiş: <span>21.04.2018</span></p></li>
                      <li><p>Plaka: <span>61 AA 61</span></p></li>
                    </ul>
                    <DeleteRezervButton></DeleteRezervButton>
                  </div>
                 </div>
              </div>
              <div className="col-md-4">
                <div className="past-info">
                  <div className="past-box">
                    <h6>Crash Otopark</h6>
                    <ul>
                      <li><p>Başlangıç: <span>21.04.2018</span></p></li>
                      <li><p>Bitiş: <span>21.04.2018</span></p></li>
                      <li><p>Plaka: <span>61 AA 61</span></p></li>
                    </ul>
                    <DeleteRezervButton></DeleteRezervButton>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="past-info">
                  <div className="past-box">
                    <h6>Crash Otopark</h6>
                    <ul>
                      <li><p>Başlangıç: <span>21.04.2018</span></p></li>
                      <li><p>Bitiş: <span>21.04.2018</span></p></li>
                      <li><p>Plaka: <span>61 AA 61</span></p></li>
                    </ul>
                    <DeleteRezervButton></DeleteRezervButton>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal>
      </div>

    );
  }
}
