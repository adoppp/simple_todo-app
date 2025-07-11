import { type FC } from "react";
import { Typography } from "@mui/material";

import { typographyStyles } from "@sections/MainSection/MainSection.styles";
import { useMainSection } from "@sections/MainSection/MainSection.hooks";
import { TodoList } from "@/components/TodoList/TodoList";
import { LoaderBox } from "@/components/LoaderBox";
import { SelectFilter } from "@/ui/SelectFilter/SelectFilter";
import { UiInput } from "@/ui/UiInput/UiInput";

export const MainSection: FC = () => {
    const { search, filter, setFilter, data, isLoading, handleSearch } = useMainSection();

    return (
        isLoading ? <LoaderBox /> : data.length ? (
            <div>
                <UiInput id="search" label="Search" onChange={handleSearch} inputValue={search} styles={{width: "100%", mb: "24px"}} />
                <SelectFilter currentFilter={filter} setFilter={setFilter} />
                <TodoList filter={filter} search={search} />
            </div> 
        ) :
        (
            <Typography sx={{ fontWeight: 500, ...typographyStyles }} variant="h5" component="h1">
                There are no tasks
            </Typography>
        )
    );
};