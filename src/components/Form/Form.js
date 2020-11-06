import React from 'react'
import { _genres } from '../../models/Genres.DataModel'

import './Form.scss'

export default function Form(props) {
  return (
    <div className="form-section">
    { switchForm() }
    </div>
  )

  function switchForm() {
    const {
      type,
      info = {},
      onChange,
      onBlur
    } = props;

    const Title = (props) => {
      return <h4 className="form-title">{props.text}</h4>
    }

    const textFields = {
      title: 'Title',
      url: 'Movie URL',
      overview: 'Overview',
      runtime: 'Runtime',
      tagline: 'Tagline',
    }

    switch (type) {
      case 'id': {
        return <React.Fragment>
          <Title text="Movie ID" />
          <p>{info.id}</p>
        </React.Fragment>
      }
      case 'date': {
        return <React.Fragment>
          <Title text="Release Date" />
          <input onChange={onChange} onBlur={onBlur} name={type} id={type} className="form-input form-input_date" type="date" defaultValue={info && info.release_date ? info.release_date : false} />
        </React.Fragment>
      }
      case 'genres': {
        return <React.Fragment>
          <Title text="Genre" />
          <select onChange={onChange} onBlur={onBlur} name={type} id={type} className="form-input form-input_select" type="select" required >
            {
              Object.keys(_genres).map(genre => {
                const options = {};
                if (genre === info.genre) {
                  options['selected'] = true
                }

                return <option key={genre} value={genre} {...options}>{_genres[genre]}</option>
              }
              )
            }
          </select>
        </React.Fragment>
      }
      case 'title':
      case 'tagline':
      case 'url':
      case 'overview':
      case 'runtime': {
        return <React.Fragment>
          <Title text={ textFields[type] } />
          <input onChange={onChange} onBlur={onBlur} name={type} id={type} className="form-input" defaultValue={info[type]} placeholder={ textFields[type] }/>
        </React.Fragment>
      }
    }
  }
}