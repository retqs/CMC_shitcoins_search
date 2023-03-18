import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { ReactFormProps } from 'types';

import {
  marketCap,
  volume,
  circulatingSupply,
  fullyDilutedMarketCap,
} from './const';
import Button from '@mui/material/Button';

// expample of main fields in which
// searching will be done
// Market Cap
// $735,447,177

// Fully Diluted Market Cap
// $896,673,129

// Volume
// $137,090,590
// 160.56%

// Circulating Supply
// 252,906,841 SNX

const Search = () => {
  const handleSubmit = (e: ReactFormProps) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Autocomplete
              freeSolo
              id='marketCap'
              disableClearable
              options={marketCap.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Market Cap'
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              freeSolo
              id='fullyDilutedMarketCap'
              disableClearable
              options={fullyDilutedMarketCap.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Fully Diluted Market Cap'
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              freeSolo
              id='volume'
              disableClearable
              options={volume.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Volume'
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              freeSolo
              id='circulatingSupply'
              disableClearable
              options={circulatingSupply.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Circulating Supply'
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
        <Button
          sx={{ marginTop: '5rem', margingLeft: 'auto' }}
          variant='contained'
        >
          go go go
        </Button>
      </form>
      <Paper elevation={1} sx={{ marginTop: '5rem' }}>
        <ul>
          <li>results list</li>
        </ul>
      </Paper>
    </div>
  );
};

export default Search;
