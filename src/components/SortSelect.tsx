const SortSelect = () => {
    return (
        <div className="flex flex-row items-center gap-[12px]">
            <img className="w-[14px] h-[16px]" src="/sort-arrows.svg" alt="sort-arrows" />
            <select name="cars" id="cars" className="appearance-none cursor-pointer text-h4 leading-h4 focus:outline-0">
                <option value="Сначала в наличии">Сначала в наличии</option>
                <option value="По имени (A-Z)">По имени (A-Z)</option>
                <option value="По имени (Z-A)">По имени (Z-A)</option>
                <option value="Сначала новее">Сначала новее</option>
                <option value="Сначала старше">Сначала в наличии</option>
                <option value="Сначала дешевле">Сначала дешевле</option>
                <option value="Сначала дороже">Сначала дороже</option>
            </select>
        </div>
    );
};

export default SortSelect;
