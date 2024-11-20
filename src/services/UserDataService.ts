import type { UserLogin } from '@/types/User'
import http from '@/http-common'

class UserDataService {
  login(data: UserLogin): Promise<any> {
    return http.post('/auth/signin', data)
  }
}

export default new UserDataService()
