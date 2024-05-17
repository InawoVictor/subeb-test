const useFormatTextLength = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
        return text;
    } else {
        return text.slice(0, maxLength - 3) + '...';
    }
}

export default useFormatTextLength;