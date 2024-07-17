import axios from "axios"; // Importa Axios para hacer peticiones HTTP
import { useEffect, useState } from "react"; // Importa useEffect y useState de React para manejar efectos secundarios y estado
import { useNavigate, useParams } from "react-router-dom"; // Importa useNavigate y useParams de react-router-dom para navegación y obtener parámetros de la URL

const URI = 'http://localhost:8000/blogs/' // Define la URL base para las peticiones al servidor de blogs

const CompEditBlog = () => {
    const [title, setTitle] = useState('') // Define el estado del título del blog
    const [content, setContent] = useState('') // Define el estado del contenido del blog
    const navigate = useNavigate() // Obtiene la función de navegación para redirigir a otras rutas
    const {id} = useParams() // Obtiene el parámetro 'id' de la URL actual

    // Función para actualizar el blog
    const update = async (e) => {
        e.preventDefault() // Previene el comportamiento por defecto del formulario
        await axios.put(URI+id, { // Realiza una petición PUT para actualizar el blog específico usando su ID
            title: title,
            content: content
        })
        navigate('/animes') // Navega de regreso a la página principal después de la actualización
    }

    // Efecto secundario para cargar el blog por su ID cuando el componente se monta
    useEffect( ()=>{
        getBlogById() // Llama a la función para obtener el blog por su ID
    },[])

    // Función para obtener un blog específico por su ID
    const getBlogById = async () => {
        const res = await axios.get(URI+id) // Realiza una petición GET para obtener el blog por su ID
        setTitle(res.data.title) // Actualiza el estado del título con el título del blog obtenido
        setContent(res.data.content) // Actualiza el estado del contenido con el contenido del blog obtenido
    }

    // Renderiza el formulario de edición del blog
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <div style={{ maxWidth: '500px', width: '100%', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Edit POST</h3>
                <form onSubmit={update}> {/* Al enviar el formulario, se llama a la función 'update' */}
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} // Actualiza el estado del título al escribir en el input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Content</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)} // Actualiza el estado del contenido al escribir en el textarea
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Update</button> {/* Botón para enviar el formulario */}
                </form>
            </div>
        </div>
    )
}

export default CompEditBlog // Exporta el componente CompEditBlog para ser utilizado en otras partes de la aplicación
