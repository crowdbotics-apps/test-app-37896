import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_base_table_partial_update = createAsyncThunk(
  "base_Tables/api_v1_base_table_partial_update",
  async payload => {
    const response = await apiService.api_v1_base_table_partial_update(payload)
    return response.data
  }
)
export const api_v1_base_table_read = createAsyncThunk(
  "base_Tables/api_v1_base_table_read",
  async payload => {
    const response = await apiService.api_v1_base_table_read(payload)
    return response.data
  }
)
export const api_v1_base_table_delete = createAsyncThunk(
  "base_Tables/api_v1_base_table_delete",
  async payload => {
    const response = await apiService.api_v1_base_table_delete(payload)
    return response.data
  }
)
export const api_v1_base_table_update = createAsyncThunk(
  "base_Tables/api_v1_base_table_update",
  async payload => {
    const response = await apiService.api_v1_base_table_update(payload)
    return response.data
  }
)
export const api_v1_base_table_create = createAsyncThunk(
  "base_Tables/api_v1_base_table_create",
  async payload => {
    const response = await apiService.api_v1_base_table_create(payload)
    return response.data
  }
)
export const api_v1_base_table_list = createAsyncThunk(
  "base_Tables/api_v1_base_table_list",
  async payload => {
    const response = await apiService.api_v1_base_table_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const base_TablesSlice = createSlice({
  name: "base_Tables",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_base_table_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_base_table_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_base_table_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_base_table_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_base_table_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_base_table_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_base_table_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_base_table_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_base_table_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_base_table_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_base_table_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_base_table_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_base_table_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_base_table_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_base_table_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_base_table_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_base_table_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_base_table_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_base_table_partial_update,
  api_v1_base_table_read,
  api_v1_base_table_delete,
  api_v1_base_table_update,
  api_v1_base_table_create,
  api_v1_base_table_list,
  slice: base_TablesSlice
}
