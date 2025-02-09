import type { UserCreation, UserLogin, UserResetPassword } from '@/types/User'
import http from '@/http-common'

/**
 * Le service de gestion pour la connexion
 */
class UserDataService {
  /**
   * La connexion
   * @param data
   * @returns
   */
  login(data: UserLogin): Promise<any> {
    return http.post('/auth/sign-in', data)
  }

  /**
   * Gestion de la création d'un compte utlisateur
   * @param data
   * @returns
   */
  create(data: UserCreation): Promise<any> {
    return http.post('/membres/register', data)
  }

  resetPassword(data: UserResetPassword, token: string): Promise<any> {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    return http.post('/auth/change-password', data, config)
  }
}

export default new UserDataService()
