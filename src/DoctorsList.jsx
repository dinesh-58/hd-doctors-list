import DoctorBrief from './DoctorBrief.jsx'

export default function DoctorsList() {
    return(
        // TODO sample for setting doctor details. fetch data from database & use loop instead  
        <DoctorBrief 
            drName='Pooja Tiwari'
            drProfession='Heart Surgeon'
            drWorkplace='Patan Hospital (Lagankhel, Lalitpur)'
            drExperience='15'
            // can't assign Number value for drExperience. make sure to use String instead
            drDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, expedita.'
            drSatisfaction='97'
            drCharge='1300'
        />
    )
}
