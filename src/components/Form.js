import React from 'react'
import Genres from '../models/Genres.DataModel'

export default function Form(props) {
  return (
    <div className="form-section">
    { switchForm() }
    </div>
  )

  function switchForm() {
    const {
      type,
      info = {}
    } = props;

    const Title = (props) => {
      return <h4 className="form-title">{props.text}</h4>
    }

    const textFields = {
      title: 'Title',
      url: 'Movie URL',
      overview: 'Overview',
      runtime: 'Runtime',
    }

    switch (type) {
      case 'id': {
        return <React.Fragment>
          <Title text="Movie ID" />
          <p>{info.id}</p>
        </React.Fragment>
      }
      case 'date': {
        let date;

        if (info && info.date) {
          date = info.date.year + '-' + info.date.month + '-' + info.date.day;
        }
        return <React.Fragment>
          <Title text="Release Date" />
          <input className="form-input form-input_date" type="date" defaultValue={date} />
        </React.Fragment>
      }
      case 'genre': {
        return <React.Fragment>
          <Title text="Genre" />
          <select className="form-input form-input_select" type="select" required >
            {
              Object.keys(Genres).map(genre => {
                const options = {};
                if (genre === info.genre) {
                  options['selected'] = true
                }

                return <option value={genre} {...options}>{Genres[genre]}</option>
              }
              )
            }
          </select>
        </React.Fragment>
      }
      case 'title':
      case 'url':
      case 'overview':
      case 'runtime': {
        return <React.Fragment>
          <Title text={ textFields[type] } />
          <input className="form-input" defaultValue={info[type]} placeholder={ textFields[type] }/>
        </React.Fragment>
      }
    }
  }
}