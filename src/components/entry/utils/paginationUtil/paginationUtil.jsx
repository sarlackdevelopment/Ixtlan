import React, {useState, useEffect} from 'react'

import Pagination from 'react-bootstrap/Pagination'

import axios from 'axios'

const paginationUtil = () => {

  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    axios.get(`http://localhost:8081/assets/stub/quantityOfNews.json`)
      .then(response => setQuantity(response.data.quantity))
      .catch(error => console.log(error))
    }, [])

  const paginationData = () => {

    const result = {}
    const pagesData = []
    const quantityOfAllPages = quantity < 8 ? 1 : Math.floor(quantity / 8)

    if (quantityOfAllPages <= 9) {

      for (let index = 1; index <= quantityOfAllPages; index++) {
        pagesData.push(index)
      }

      result.pagesData = pagesData

    } else {

      const firstPages = []
      const lastPages  = []

      const quantityOfBorderPages = Math.floor((quantityOfAllPages - 6) / 2)

      for (let index = 1; index <= quantityOfAllPages; index++) {

        pagesData.push(index)

        if (index <= quantityOfBorderPages) {
          firstPages.push(index)
        } else if (quantityOfAllPages - index < quantityOfBorderPages) {
          lastPages.push(index)
        }

      }

      result.pagesData = pagesData
      result.firstPages = firstPages
      result.lastPages = lastPages

    }

    return result

  }

  // TODO адаптив

  const paginationMounting = () => {

    const currentPage = 11

    const { pagesData, firstPages, lastPages } = paginationData()

    let result = []
    if (pagesData.length <= 9) {
      pagesData.forEach(item => result.push(<Pagination.Item>{item}</Pagination.Item>))
    } else {
      
      if (firstPages.includes(currentPage)) {

        firstPages.forEach(item => result.push(<Pagination.Item>{item}</Pagination.Item>))

        result.push(<Pagination.Ellipsis />)
        result.push(<Pagination.Item>{pagesData.length}</Pagination.Item>)

      } else if (lastPages.includes(currentPage)) {

          result.push(<Pagination.Item>{1}</Pagination.Item>)
          result.push(<Pagination.Ellipsis />)

          lastPages.forEach(item => result.push(<Pagination.Item>{item}</Pagination.Item>))

      } else {

          result.push(<Pagination.Item>{1}</Pagination.Item>)
          result.push(<Pagination.Ellipsis />)
          
          for (let i = currentPage - 2; i <= currentPage + 2; i++){
            result.push(<Pagination.Item>{i}</Pagination.Item>)
          }

          result.push(<Pagination.Ellipsis />)
          result.push(<Pagination.Item>{pagesData.length}</Pagination.Item>)

      }
    }

    return result

  }

  return (
    <Pagination className="justify-content-center">
      <Pagination.First />
      <Pagination.Prev />
        {paginationMounting()}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>)
}

export default paginationUtil