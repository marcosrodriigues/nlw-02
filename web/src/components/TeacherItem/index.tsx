import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'
import api from '../../service/api';

export interface Teacher {
    id: number,
    name: string
    avatar: string
    bio: string
    whatsapp: string
    subject: string
    cost: number
}
interface TeacherItemProps {
    teacher: Teacher
}
const TeacherItem : React.FC<TeacherItemProps> = ({
    teacher
}) => {

    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <footer>
                <p>
                    Preço/hora 
                    <strong>R$ {teacher.cost}</strong> 
                </p>
                <a 
                    onClick={createNewConnection} 
                    href={`https://wa.me/${teacher.whatsapp}`}
                    target="_blank"
                >
                    <img src={whatsappIcon} alt="Entrar em contato"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem