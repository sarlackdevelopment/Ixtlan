import React from 'react'
//import 'rc-pagination/assets/index.css'
//import Pagination from 'rc-pagination'
import Pagination from 'react-bootstrap/Pagination'

const paginationUtil = () => {

  const currentPage = 7
  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
  //const arr = [1,2,3,4,5,6,7,8,9,10]
  //const arr = [1,2,3,4,5]

  const first = [1,2,3,4,5,6,7]
  const last = [15,16,17,18,19,20,21]

  // TODO адаптив

  const bar = () => {

    let result = []
    if (arr.length <= 9) {
      arr.forEach(item => result.push(<Pagination.Item>{item}</Pagination.Item>))
    } else {
      
      if (first.includes(currentPage)) {

        first.forEach(item => result.push(<Pagination.Item>{item}</Pagination.Item>))

        result.push(<Pagination.Ellipsis />)
        result.push(<Pagination.Item>{arr.length}</Pagination.Item>)

      } else if (last.includes(currentPage)) {

          result.push(<Pagination.Item>{1}</Pagination.Item>)
          result.push(<Pagination.Ellipsis />)

          last.forEach(item => result.push(<Pagination.Item>{item}</Pagination.Item>))

      } else {

          result.push(<Pagination.Item>{1}</Pagination.Item>)
          result.push(<Pagination.Ellipsis />)
          
          for (let i = currentPage - 2; i <= currentPage + 2; i++){
            result.push(<Pagination.Item>{i}</Pagination.Item>)
          }

          result.push(<Pagination.Ellipsis />)
          result.push(<Pagination.Item>{arr.length}</Pagination.Item>)

      }
    }

    return result

  }

  return (
    <Pagination className="justify-content-center">
      <Pagination.First />
      <Pagination.Prev />
      {bar()}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>)
}

export default paginationUtil