const useFormatDate = (dateString: string) => {
    if (!dateString) return '';

    const date = new Date(dateString);
    
    // Get year, month, and day part from the date
    const year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const day = date.toLocaleString("default", { day: "2-digit" });
    
    return `${day}/${month}/${year}`;
}

export default useFormatDate;