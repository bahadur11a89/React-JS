import React from 'react'

const Myform = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        gender: '',
        course: 'react',
        hobbis: []
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        if (type === 'checkbox') {
            const updatedHobbis = checked
                ? [...formData.hobbis, value]
                : formData.hobbis.filter((hobby) => hobby !== value)

            setFormData({
                ...formData,
                hobbis: updatedHobbis
            })
            return
        }

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    return (
        <>
            <h1>My form</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <br /> <br /> <br />

                <label>Gender:</label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === 'Male'}
                        onChange={handleChange}
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === 'Female'}
                        onChange={handleChange}
                    />
                    Female
                </label>
                <br /> <br /> <br />

                <label htmlFor="course">Course:</label>
                <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                >
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>

                <br /> <br />
                <label>Hobbis:</label>
                <label>
                    <input
                        type="checkbox"
                        name="hobbis"
                        value="Reading"
                        checked={formData.hobbis.includes('Reading')}
                        onChange={handleChange}
                    />
                    Reading
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="hobbis"
                        value="Travelling"
                        checked={formData.hobbis.includes('Travelling')}
                        onChange={handleChange}
                    />
                    Travelling
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="hobbis"
                        value="Cooking"
                        checked={formData.hobbis.includes('Cooking')}
                        onChange={handleChange}
                    />
                    Cooking
                </label>

                <br /> <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Myform

