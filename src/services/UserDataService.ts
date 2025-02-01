import type { UserCreation, UserLogin } from '@/types/User'
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
}

export default new UserDataService()
