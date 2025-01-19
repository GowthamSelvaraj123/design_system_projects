import React from 'react';
import '../button/Button.css'

export default function Button({appearance, event, data}) {
  return (
    <div>
      <button style={{textTransform:'capitalize'}} className={appearance} onClick={event}>{data}</button>
    </div>
  )
}
