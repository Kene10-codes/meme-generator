import { useState } from "react"

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: "", 
        lastName: "", 
        email: "", 
        comment: "", 
        isFriendly: true,
        employment: "",
        favColor: ""
    })
   
    console.log(formData.favColor)
    function handleChange(e) {
        const {name, value, type, checked} = e.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)

    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name = "firstName"
                value={formData.firstName}
                
            />

            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />

           <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />

            <textarea 
                placeholder="Comments"
                value={formData.comment}
                onChange={handleChange}
                name="comment"
            />
            <input 
               type="checkbox"
               value={formData.isFriendly}
               onChange={handleChange}
               id="isFriendly"
               name="isFriendly"
            />
            
            <label htmlFor="isFriendly">Is Friendly ?</label>
            
            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    onChange={handleChange}
                    name="employment"
                    checked={formData.employment === "unemployed"}
                    value="unemployed"

                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    onChange={handleChange}
                    name="employment"
                    checked={formData.employment === "part-time"}
                    value="part-time"
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    onChange={handleChange}
                    checked={formData.employment === "full-time"}
                    value="full-time"

                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>

            <select 
               id="favColor"
               name="favColor"
               value={formData.favColor}
               onChange={handleChange}
               >
                <option value="">Choose a color</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            < br />
            <button>Submit</button>
        </form>
    )
}