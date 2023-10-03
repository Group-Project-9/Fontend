const Card = ({activity_id, start_date, duration, location, note}) => {
    return (
        <div className="bg-stone-700 rounded-3xl p-6 m-4">
            <div className="text-xl text-neutral-800 font-medium pb-3 dark:text-neutral-50 ">{activity_id}</div>
            <div className="text-base text-neutral-600 dark:text-neutral-200">date : {start_date}</div>
            <div className="text-base text-neutral-600 dark:text-neutral-200">duration : {duration}</div>
            <div className="text-base text-neutral-600 dark:text-neutral-200">location : {location}</div>
            <div className="text-base text-neutral-600 dark:text-neutral-200">note : {note}</div>
        </div>
    );
};

export default Card;
