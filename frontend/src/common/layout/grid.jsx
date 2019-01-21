import React, {Component} from 'react'

// Component para melhorar a sintaxe de chamada de classes do bootstrap do tipo grid

export default class Grid extends Component {
  toCssClasses(numbers) {
    const cols = numbers ? numbers.split(' ') : []
    let classes = ''

    if(cols[0]) classes += `col-xs-${cols[0]}`
    if(cols[1]) classes += `col-sm-${cols[1]}`
    if(cols[2]) classes += `col-md-${cols[2]}`
    if(cols[3]) classes += `col-lg-${cols[3]}`

    return classes
  }

  render(){
    const gridClasses = this.toCssClasses(this.props.cols || '12')
    return (
      <div className={gridClasses}>
        {this.props.children}
      </div>
    )
  }
}

//Expetcts like toCssClasses('12 5 4 2') a class to my Grid component like 'col-xs-12 col-sm-5 col-md-4 col-lg-2