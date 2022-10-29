export const getValidIdNumber = (
    id: string | null | undefined
): number | null => {
    if (
        id === undefined ||
        id === null ||
        id === '' ||
        id.startsWith(' ') ||
        id.endsWith(' ')
    )
        return null
    const result = Number(id)
    return Number.isNaN(result) ? null : result
}
