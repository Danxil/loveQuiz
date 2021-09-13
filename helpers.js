export const getComplexity = (value) => {
    if (value === 0) return 'Новичек'
    else if (value === 1) return 'Легкий'
    else if (value === 2) return 'Средний'
    else if (value === 3) return 'Продвинутый'
    else if (value === 4) return 'Эксперт'
}

export const getSkill = (value) => {
    if (value === 1) return 'Уверенность'
    else if (value === 2) return 'Коммуникабельность'
    else if (value === 3) return 'Креативность'
    else if (value === 4) return 'Экстраверсия'
    else if (value === 5) return 'Эмпатия'
    else if (value === 6) return 'Раскованность'
}