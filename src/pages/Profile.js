import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { GithubContext } from '../context/github/githubContext';
import { Repos } from '../components/Repos';

export const Profile = () => {
  const { name: urlName } = useParams();
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
  }, []);

  if (loading) {
    return <p className="text-center">Загрузка...</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  return (
    <>
      <Link to="/" className="btn btn-link">
        На главную
      </Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url} alt={name} style={{ width: '150px' }} />
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}
            </div>
            <div className="col">
              {bio && (
                <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              )}
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Открыть профиль
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Username: </strong> {login}
                  </li>
                )}

                {company && (
                  <li>
                    <strong>Компания: </strong> {company}
                  </li>
                )}

                {blog && (
                  <li>
                    <strong>Website: </strong> {blog}
                  </li>
                )}
              </ul>

              <span className="btn btn-primary btn-sm">
                Подписчики: {followers}
              </span>
              <span className="btn btn-success btn-sm">
                Подписан: {following}
              </span>
              <span className="btn btn-info btn-sm">
                Репозитории: {public_repos}
              </span>
              <span className="btn btn-dark btn-sm">Gists: {public_gists}</span>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </>
  );
};
