import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {loadData} from '../../redux/photoRedux/photo.actions'
import {PHOTO_KEY} from '../../redux/photoRedux/photo.reducer'


const Photo = () => {

    // initialize dispatch
    let dispatch = useDispatch()

    useEffect(() =>{
        dispatch(loadData())
    })

    // view data
    let viewPhoto = useSelector((state) =>{
        return state[PHOTO_KEY]

    })
    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(viewPhoto)}</pre> */}
         <div className='row mt-3'>
             <div className='col-md-2'>
               
             </div>
             <div className='col-md-8'>
                 <div className='card text-center'>
                     <div className='card-header'>
                         <h3 className='font-weight-bold'>GALLERY APP WITH JSON API</h3>
                     </div>


                     <div className='card-body'>
                       
                      
                              <React.Fragment>
                              {
                                  viewPhoto.data.map((item) =>{
                                      return(
                                          <div key = {item.id}>
                                              <img src={item.thumbnailUrl} alt='images' />
                                          </div>
                                      )
   
                                  })
                              }
                          </React.Fragment>
                          
                       
                     </div>
                 </div>
             </div>
         </div>
        </React.Fragment>
            
    
    )
}

export default Photo
