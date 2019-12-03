import React, {useState, useEffect} from 'react'

import Pagination from 'react-bootstrap/Pagination'

import axios from 'axios'

const paginationUtil = (liftCurrentPage) => {

  const [quantity, setQuantity] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  // TODO: Это не совсем утилита получается - сделать утилитой и перенести 
  //       запрос количества в родительский (вызывающий) компонент
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

      const firstPages            = []
      const lastPages             = []
      const quantityOfBorderPages = 7

      for (let index = 1; index <= quantityOfAllPages; index++) {

        pagesData.push(index)

        if (index <= quantityOfBorderPages) {
          firstPages.push(index)
        } else if (quantityOfAllPages - index < quantityOfBorderPages) {
          lastPages.push(index)
        }

      }

      localStorage.setItem('quantityOfAllPages', quantityOfAllPages)

      result.pagesData       = pagesData
      result.firstPages      = firstPages
      result.lastPages       = lastPages
      result.leftBorderPage  = quantityOfBorderPages
      result.rigthBorderPage = lastPages[0]

    }

    return result

  }

  const getPaginationItem = (itemData, active = false) => {
    return (active ?
      <Pagination.Item key={itemData} active>{itemData}</Pagination.Item> :
      <Pagination.Item key={itemData} onClick={() => {
        setCurrentPage(itemData)
        liftCurrentPage.setCurrentPage(itemData)
      }}>{itemData}</Pagination.Item>
    )
  }

  const middleMounting = (countPages) => {

    const result = []

    result.push(getPaginationItem(1, currentPage === 1))
    result.push(<Pagination.Ellipsis key={'firstEllipsis'} />)
          
    for (let i = currentPage - 2; i <= currentPage + 2; i++){
      result.push(getPaginationItem(i, i === currentPage))
    }

    result.push(<Pagination.Ellipsis key={'secondEllipsis'} />)
    result.push(getPaginationItem(countPages, countPages === currentPage))

    return result

  }

  // TODO адаптив

  const paginationMounting = () => {

    const { pagesData, firstPages, lastPages, leftBorderPage, rigthBorderPage } = paginationData()

    let result = []

    if (pagesData.length <= 9) {
      
      pagesData.forEach(item => result.push(getPaginationItem(item, item === currentPage)))

    } else {
      
      if (firstPages.includes(currentPage)) {

        if (currentPage === leftBorderPage) {

          result = middleMounting(pagesData.length)

        } else {

          firstPages.forEach(item => result.push(getPaginationItem(item, item === currentPage)))

          result.push(<Pagination.Ellipsis key={'secondEllipsis'} />)
          result.push(getPaginationItem(pagesData.length, pagesData.length === currentPage))

        }

      }
       
      if (lastPages.includes(currentPage) ) {

        if (currentPage === rigthBorderPage) {

          result = middleMounting(pagesData.length)

        } else {

          result.push(getPaginationItem(1, currentPage === 1))
          result.push(<Pagination.Ellipsis key={'firstEllipsis'} />)

          lastPages.forEach(item => result.push(getPaginationItem(item, item === currentPage)))

        }

      } 
      
      if ((!firstPages.includes(currentPage) && !lastPages.includes(currentPage))) {

        result = middleMounting(pagesData.length)

      }
    }

    return result

  }

  const quantityOfAllPages = Number(localStorage.getItem('quantityOfAllPages'))

  return (
    <Pagination className="justify-content-center">
      <Pagination.First onClick = {() => {
        setCurrentPage(1)
        liftCurrentPage.setCurrentPage(1)
      }} />
      <Pagination.Prev onClick = {() => {
        let myCurrentPage = currentPage == 1 ? 1 : currentPage - 1
        setCurrentPage(myCurrentPage)
        liftCurrentPage.setCurrentPage(myCurrentPage)
      }} />
        {paginationMounting()}
      <Pagination.Next onClick = {() => {
        let myCurrentPage = currentPage == quantityOfAllPages ? quantityOfAllPages : currentPage + 1
        setCurrentPage(myCurrentPage)
        liftCurrentPage.setCurrentPage(myCurrentPage)
      }} />
      <Pagination.Last onClick = {() => {
        setCurrentPage(quantityOfAllPages)
        liftCurrentPage.setCurrentPage(quantityOfAllPages)
      }} />
    </Pagination>)
}

export default paginationUtil