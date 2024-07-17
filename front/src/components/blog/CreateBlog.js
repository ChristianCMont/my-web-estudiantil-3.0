import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompCreateBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {title: title, content:content})
        navigate('/animes')
    }   

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <div style={{ maxWidth: '500px', width: '100%', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Create POST</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary' style={{ width: '100%' }}>Store</button>
            </form>
        </div>
    </div>
    
    )
}

export default CompCreateBlog