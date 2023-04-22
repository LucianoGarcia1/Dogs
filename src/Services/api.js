export const API_URL = `https://dogsapi.origamid.dev/json`;

export const TOKEN_POST = (body) => {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export const TOKEN_VALIDATE_POST = (token) => {
  return {
    url: API_URL + "/jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer" + token,
      },
    },
  };
};

export const GET_USER = (token) => {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer" + token,
      },
    },
  };
};

export const USER_POST = (body) => {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export const PHOTO_POST = (token, formData) => {
  return {
    url: API_URL + "/api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer" + token,
      },
      body: formData,
    },
  };
};

export const PHOTO_GET = ({ page, total, user }) => {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
};

export const PHOTOS_GET = (id) => {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
};

export const PHOTO = (id) => {
  return {
    url: `${API_URL}/api/photo/${id}`,
  };
};

export const COMMENT_POST = (id, body) => {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + window.localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    },
  };
};

export const DELETE_POST = (id) => {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer" + window.localStorage.getItem("token"),
      },
    },
  };
};
export const PASSWORD_LOST = (body) => {
  return {
    url: `${API_URL}/api/password/lost`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export const PASSWORD_RESET = (body) => {
  return {
    url: `${API_URL}/api/password/reset`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};
export const GET_STATS = () => {
  return {
    url: `${API_URL}/api/stats`,
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer" + window.localStorage.getItem("token"),
      },
    },
  };
};

