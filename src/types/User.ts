/**
 * User interface
 * Type pour UserLogin
 */
export interface UserLogin {
  /**
   * Email
   */
  email: string
  /**
   * Mot de passe
   */
  mot_de_passe: string
}

/**
 * User interface
 * Type pour UserCreation
 */
export interface UserCreation {
  /**
   * Email de connexion
   */
  email: string
  /**
   * Mot de passe
   */
  mot_de_passe: string
  /**
   * Confirmation du mot de passe
   */
  confirmation: string
  /**
   * Clef de sécurité (fournie par le club)
   */
  clef: string
}

/**
 * User interface
 * Type pour UserResetPassword
 */
export interface UserResetPassword {
  nouveau_mdp: string

  confirmation_mdp: string
}
