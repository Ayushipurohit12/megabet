import api from "./Api";
import {
  getLocalStorageItem,
  notifyError,
  notifySuccess,
  notifyWarning,
} from "./Helper";

const loginRequest = async (payload) => {
  try {
    const { data } = await api.post("/api/v1/login", payload);
    if (data.meta.code === 200) {
      notifySuccess(data.meta.message);
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    console.log(error);
    notifyError(error?.response?.data?.message);
  }
};

const registerRequest = async (payload) => {
  try {
    const { data } = await api.post("/api/v1/signUp", payload);
    if (data.meta.code === 200) {
      notifySuccess(data.meta.message);
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const signUpWithOtpRequest = async (payload) => {
  try {
    const { data } = await api.post("/api/v1/signup-otp", payload);
    if (data.meta.code === 200) {
      notifySuccess(data.meta.message);
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const loginWithOtpRequest = async (payload) => {
  try {
    const { data } = await api.post("/api/v1/verify-otp-login", payload);
    if (data.meta.code === 200) {
      notifySuccess(data.meta.message);
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const resendOtpRequest = async (payload) => {
  try {
    const { data } = await api.post("/api/v1/resend-otp", payload);
    if (data.meta.code === 200) {
      notifySuccess(data.meta.message);
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const verifyOtpRequest = async (payload) => {
  try {
    const { data } = await api.post("/api/v1/verify-otp", payload);
    if (data.meta.code === 200) {
      notifySuccess(data.meta.message);
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const forgotPassordRequest = async (payload) => {
  try {
    const { data } = await api.post("/api/v1/forgot_password", payload);
    if (data.meta.code === 200) {
      notifySuccess(data.meta.message);
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const getUserDataRequest = async () => {
  try {
    const { data } = await api.get("/api/v1/getUserData");
    if (data.meta.code === 200) {
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const getAppSettingsRequest = async () => {
  try {
    const { data } = await api.get("/api/v1/app-settings");
    if (data.meta.code === 200) {
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const getAdvertisemetsRequest = async () => {
  try {
    const { data } = await api.get("/api/v1/advertisement");
    if (data.meta.code === 200) {
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const postDepositRequest = async (payload) => {
  try {
    const { data } = await api.post("/api/v1/deposit-request", payload);
    if (data.meta.code === 200) {
      notifySuccess(data.meta.message);
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const getAccountDetailsRequest = async () => {
  try {
    const { data } = await api.get("/api/v1/account-details");
    if (data.meta.code === 200) {
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const submitAccountDetailsRequest = async (payload) => {
  try {
    const { data } = await api.post("/api/v1/account-details", payload);
    if (data.meta.code === 200) {
      notifySuccess(data.meta.message);
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const getWithdrawlRequests = async () => {
  try {
    const { data } = await api.get("/api/v1/withdrawal-request");
    if (data.meta.code === 200) {
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const submitWithdrawlRequest = async (payload) => {
  try {
    const { data } = await api.post("/api/v1/withdrawal-request", payload);
    if (data.meta.code === 200) {
      notifySuccess(data.meta.message);
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const updateAccountDetailsRequest = async (payload) => {
  try {
    const { data } = await api.put("/api/v1/account-details", payload);
    if (data.meta.code === 200) {
      notifySuccess(data.meta.message);
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const getAccountStatementRequest = async (payload) => {
  try {
    const { data } = await api.get(
      `api/v1/transaction?start_date=${payload?.startDate}&end_date=${payload?.endDate}&isChecked=${payload?.isChecked}`
    );
    if (data.meta.code === 200) {
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const getBetsStatementRequest = async (payload) => {
  try {
    const { data } = await api.get(
      `api/v1/result-transaction?start_date=${payload?.startDate}&end_date=${payload?.endDate}&isChecked=${payload?.isChecked}`
    );
    if (data.meta.code === 200) {
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const changePasswordRequest = async (payload) => {
  try {
    const { data } = await api.post("/api/v1/change_password", payload);
    if (data.meta.code === 200) {
      notifySuccess(data.meta.message);
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const logoutRequest = async () => {
  try {
    console.log("INDEISE");
    let user_data = JSON.parse(getLocalStorageItem("userData"));
    let payload = {
      user_id: user_data?.id,
    };
    const { data } = await api.post("/api/v1/logout", payload);
    if (data.meta.code === 200) {
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    console.log(error);
    notifyError(error?.response?.data?.message);
  }
};

const changeWalletRequest = async (payload) => {
  try {
    const { data } = await api.put("/api/v1/wallet", payload);
    if (data.meta.code === 200) {
      notifySuccess(data.meta.message);
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const forfeitBonusRequest = async (payload) => {
  try {
    const { data } = await api.put("/api/v1/forfeit-bonus", payload);
    if (data.meta.code === 200) {
      notifySuccess(data.meta.message);
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const claimBonusRequest = async (payload) => {
  try {
    const { data } = await api.put("/api/v1/claim-bonus", payload);
    if (data.meta.code === 200) {
      notifySuccess(data.meta.message);
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const getBonusDataRequest = async () => {
  try {
    const { data } = await api.get("/api/v1/bonus-data");
    if (data.meta.code === 200) {
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const getRefferalUsersRequest = async () => {
  try {
    const { data } = await api.get("/api/v1/get-refferal-users");
    if (data.meta.code === 200) {
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const getRefferalTxnRequest = async () => {
  try {
    const { data } = await api.get("/api/v1/get-refferal-transactions");
    if (data.meta.code === 200) {
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

const getWeeklyRefferalTxnRequest = async (payload) => {
  try {
    const { data } = await api.get(
      `/api/v1/get-weekly-refferal-transactions?startDate=${payload?.startDate}&endDate=${payload?.endDate}`
    );
    if (data.meta.code === 200) {
      return data;
    } else if (data.meta.code !== 200) {
      notifyWarning(data.meta.message);
      return data;
    }
  } catch (error) {
    notifyError(error?.response?.data?.message);
  }
};

export {
  loginRequest,
  registerRequest,
  signUpWithOtpRequest,
  loginWithOtpRequest,
  resendOtpRequest,
  verifyOtpRequest,
  getUserDataRequest,
  forgotPassordRequest,
  changePasswordRequest,
  logoutRequest,
  postDepositRequest,
  getAccountDetailsRequest,
  getWithdrawlRequests,
  submitWithdrawlRequest,
  updateAccountDetailsRequest,
  submitAccountDetailsRequest,
  getAccountStatementRequest,
  getBetsStatementRequest,
  getAppSettingsRequest,
  getAdvertisemetsRequest,
  changeWalletRequest,
  forfeitBonusRequest,
  claimBonusRequest,
  getBonusDataRequest,
  getRefferalUsersRequest,
  getRefferalTxnRequest,
  getWeeklyRefferalTxnRequest,
};
