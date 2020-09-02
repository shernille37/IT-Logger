import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TechListModal = ({ tech: { techs }, getTechs }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getTechs })(TechListModal);
