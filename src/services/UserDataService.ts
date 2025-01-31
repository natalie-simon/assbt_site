import type { UserLogin } from '@/types/User'
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
}

export default new UserDataService()
