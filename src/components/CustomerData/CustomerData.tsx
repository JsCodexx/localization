import styled from "@emotion/styled";
import { Container, Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Dark, H1, Primary, Secondary } from "../../utils";
import { Layout } from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { createTheme, ThemeProvider, withStyles } from "@mui/material";
const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "House No",
    width: 90,
  },
  { field: "name", headerName: "Name", width: 190 },

  {
    field: "address",
    headerName: "Address",
    type: "number",
    width: 400,
  },
  {
    field: "city",
    headerName: "City",
    type: "number",
    width: 100,
  },
];

const rows = [
  {
    id: 1,
    name: "Jon",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
  },
  {
    id: 2,
    name: "Cersei",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
  },
  {
    id: 3,
    name: "Jaime",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
  },
  {
    id: 4,
    name: "Arya",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
  },
  { id: 5, name: "Daenerys", address: "valancia", city: "Lahore" },
  {
    id: 6,
    name: "dvd",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
  },
  {
    id: 7,
    name: "Ferrara",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
  },
  {
    id: 8,
    name: "Rossini",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
  },
  {
    id: 9,
    name: "Harvey",
    address: "Valancia Town Lahore Block H",
    city: "Lahore",
  },
];

export const Td = styled("td")({
  width: "10rem",
  textAlign: "center",
});

// this is how text fields of mui is styled
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#26255f",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#26255f",
    },
    "&:hover fieldset": {
      borderColor: "#26255f",
    },
    "&.Mui-focused fieldset": {
      borderColor: Dark,
    },
    "& label": {
      color: "white",
    },
  },
});

const theme = createTheme({
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "red",
          color: "black",
          borderRadius: 0,
          marginTop: 8,
        },
      },
    },
  },
});

const StyledMenu = styled(Menu)({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 130,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "blue",
      },
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: "red",
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: "green",
      },
    },
    paper: {
      borderRadius: 0,
      marginTop: 100,
    },
  },
});

const StyledMenuItem = styled(MenuItem)({
  "&:hover": {
    backgroundColor: "blue",
    color: " black",
  },
});

export const CustomerData = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const navigate = useNavigate();
  // setting the state with the selected option
  const handleSelectChange = (event: any) => {
    const selectedOption = event.target.value;
    console.log(selectedOption, "selected opeiton");
    setSelectedValue(selectedOption);
    // Navigate to the desired page based on the selected option
    if (selectedOption === "auto") {
      navigate("/uploadData");
    }
  };

  // Search teh data in table
  const [selected, setSelected] = useState<any>([]);

  const handleAutocompleteChange = (event: any, value: any) => {
    rows.map((item: any, index: Number) => {
      let newData: any = [];
      if (item.name === value) {
        console.log(true);

        newData.push(item);

        setSelected(newData);
      }
    });
  };

  useEffect(() => {
    console.log(selected, "selected");
  }, []);

  // menue button functionality
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { t } = useTranslation();

  return (
    <Layout>
      <Box>
        <Container>
          <H1 mt={3} variant="h1" sx={{ color: Dark, textAlign: "center" }}>
            {t("Customers Data")}
          </H1>
          <Box
            sx={{
              display: "flex",
              height: "4rem",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              gap: "1rem",
            }}
          >
            <Stack
              spacing={2}
              sx={{ width: "400px", maxWidth: "500px", mt: 3, mb: 2 }}
            >
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={rows.map((option) => option.name)}
                onChange={handleAutocompleteChange}
                renderInput={(params) => (
                  <CssTextField
                    {...params}
                    label={t("Search input")}
                    InputLabelProps={{
                      style: {
                        color: "black",
                      },
                    }}
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                      style: {
                        color: "black",
                        backgroundColor: "white",
                        // height: "2.5rem",
                      },
                    }}
                    sx={{
                      color: "white",

                      height: "2rem",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  />
                )}
              />
            </Stack>
            <Button
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
              onChange={handleSelectChange}
              value={selectedValue}
              sx={{
                backgroundColor: "#26255f",
                "&:hover": {
                  backgroundColor: Dark,
                },
              }}
            >
              Options
            </Button>

            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{ "aria-labelledby": "demo-customized-button" }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <StyledMenuItem onClick={handleClose} disableRipple>
                <EditIcon />
                Auto
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClose} disableRipple>
                <FileCopyIcon />
                Manual
              </StyledMenuItem>
              <Divider sx={{ my: 0.5 }} />
              <StyledMenuItem onClick={handleClose} disableRipple>
                <ArchiveIcon />
                Archive
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClose} disableRipple>
                <MoreHorizIcon />
                More
              </StyledMenuItem>
            </StyledMenu>

            {/* <Select value={selectedValue} onChange={handleSelectChange}>
              <option style={{ padding: "10px 14px" }} value="volvo" selected>
                {t("New")}
              </option>
              <option style={{ padding: "10px 14px" }} value="auto">
                Auto
              </option>
              <option style={{ padding: "10px 14px" }} value="manual">
                Manual
              </option>
            </Select> */}
            {selected?.map((item: any, index: Number) => (
              <div key={index.toString()}> this is {item.name}</div>
            ))}
          </Box>
          <Box mt={5}>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                sx={{ border: "1px solid black" }}
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
            </div>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};
