import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TechListModal = ({ techs, getTechs }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
    setLoading(false);
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {(!loading && techs === null) || techs.length === 0 ? (
            <p className='center'>No techs at the moment</p>
          ) : (
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)
          )}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  techs: PropTypes.array, // isRequired
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  techs: state.tech.techs,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
