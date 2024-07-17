type PatientDetailProps = {
    label: string
    data: string
}

const PatientDetailItem = ({label, data} : PatientDetailProps) => {
    return (
        <p className="font-bold mb-3 text-gray-700 uppercas">
            {label}: {''}
            <span className="font-normal normal-case">{data}</span>
        </p>
    )
}

export default PatientDetailItem
